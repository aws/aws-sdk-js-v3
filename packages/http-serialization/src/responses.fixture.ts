import { HttpResponse } from "@aws-sdk/types";

export const responses = new Map<string, HttpResponse<string>>();

// add examples from https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/*
responses.set(
  `HTTP/1.1 200 OK 
Date: Wed, 21 Oct 2015 07:28:00 GMT

<html>
  <body>
    <h1>File deleted.</h1> 
  </body>
</html>`,
  {
    statusCode: 200,
    headers: {
      date: "Wed, 21 Oct 2015 07:28:00 GMT"
    },
    body: `<html>
  <body>
    <h1>File deleted.</h1> 
  </body>
</html>`
  }
);

responses.set(
  `HTTP/1.1 200 OK
Allow: OPTIONS, GET, HEAD, POST
Cache-Control: max-age=604800
Date: Thu, 13 Oct 2016 11:45:00 GMT
Expires: Thu, 20 Oct 2016 11:45:00 GMT
Server: EOS (lax004/2813)
x-ec-custom-error: 1
Content-Length: 0`,
  {
    statusCode: 200,
    headers: {
      allow: "OPTIONS, GET, HEAD, POST",
      "cache-control": "max-age=604800",
      date: "Thu, 13 Oct 2016 11:45:00 GMT",
      expires: "Thu, 20 Oct 2016 11:45:00 GMT",
      server: "EOS (lax004/2813)",
      "x-ec-custom-error": "1",
      "content-length": "0"
    }
  }
);

responses.set(
  `HTTP/1.1 204 No Content
Content-Location: /file.txt
ETag: "e0023aa4f"`,
  {
    statusCode: 204,
    headers: {
      "content-location": "/file.txt",
      etag: '"e0023aa4f"'
    }
  }
);

responses.set(
  `HTTP/1.1 404 Not Found 
Date: Wed, 21 Oct 2015 07:28:00 GMT

<html>
  <body>
    <h1>Not found.</h1> 
  </body>
</html>`,
  {
    statusCode: 404,
    headers: {
      date: "Wed, 21 Oct 2015 07:28:00 GMT"
    },
    body: `<html>
  <body>
    <h1>Not found.</h1> 
  </body>
</html>`
  }
);
