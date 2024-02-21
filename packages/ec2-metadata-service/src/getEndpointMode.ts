export interface EndpointMode {
  IPv4: string;
  IPv6: string;
}

export const getEndpointMode = (): EndpointMode => {
  return {
    IPv4: "IPv4",
    IPv6: "IPv6",
  };
};

export default getEndpointMode;
