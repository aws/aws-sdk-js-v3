interface Endpoint {
  IPv4: string;
  IPv6: string;
}

const getEndpoint = (): Endpoint => {
  return {
    IPv4: "http://169.254.169.254",
    IPv6: "http://[fd00:ec2::254]",
  };
};

export default getEndpoint;
