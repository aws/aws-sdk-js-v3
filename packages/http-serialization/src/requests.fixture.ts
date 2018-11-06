import {HttpRequest} from '@aws-sdk/types';

export const requests = new Map<string, Partial<HttpRequest<string>>>();

// add examples from https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/*
requests.set(
    `CONNECT server.example.com:80 HTTP/1.1 
Host: server.example.com:80 
Proxy-Authorization: basic aGVsbG86d29ybGQ=`,
    {
        method: 'CONNECT',
        hostname: 'server.example.com',
        port: 80,
        headers: {
            host: 'server.example.com:80',
            'proxy-authorization': 'basic aGVsbG86d29ybGQ='
        }
    }
);

requests.set(
    'DELETE /file.html HTTP/1.1',
    {
        method: 'DELETE',
        path: '/file.html',
        headers: {}
    }
);

requests.set(
    'GET /index.html HTTP/1.1',
    {
        method: 'GET',
        path: '/index.html',
        headers: {}
    }
);

requests.set(
    'HEAD /index.html HTTP/1.1',
    {
        method: 'HEAD',
        path: '/index.html',
        headers: {}
    }
);

requests.set(
    'OPTIONS /index.html HTTP/1.1',
    {
        method: 'OPTIONS',
        path: '/index.html',
        headers: {}
    }
);

requests.set(
    'OPTIONS * HTTP/1.1',
    {
        method: 'OPTIONS',
        path: '*',
        headers: {}
    }
);

requests.set(
    `OPTIONS /resources/post-here/ HTTP/1.1 
Host: bar.other 
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8 
Accept-Language: en-us,en;q=0.5 
Accept-Encoding: gzip,deflate 
Accept-Charset: ISO-8859-1,utf-8;q=0.7,*;q=0.7 
Connection: keep-alive 
Origin: http://foo.example 
Access-Control-Request-Method: POST 
Access-Control-Request-Headers: X-PINGOTHER, Content-Type`,
    {
        method: 'OPTIONS',
        path: '/resources/post-here/',
        hostname: 'bar.other',
        headers: {
            host: 'bar.other',
            accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
            'accept-language': 'en-us,en;q=0.5',
            'accept-encoding': 'gzip,deflate',
            'accept-charset': 'ISO-8859-1,utf-8;q=0.7,*;q=0.7',
            connection: 'keep-alive',
            origin: 'http://foo.example',
            'access-control-request-method': 'POST',
            'access-control-request-headers': 'X-PINGOTHER, Content-Type',
        }
    }
);

requests.set(
    `PATCH /file.txt HTTP/1.1 
Host: www.example.com
Content-Type: application/example
If-Match: "e0023aa4e"
Content-Length: 100

[description of changes]`,
    {
        method: 'PATCH',
        path: '/file.txt',
        headers: {
            host: 'www.example.com',
            'content-type': 'application/example',
            'if-match': '"e0023aa4e"',
            'content-length': '100'
        },
        body: '[description of changes]',
        hostname: 'www.example.com'
    }
);

requests.set(
    `POST / HTTP/1.1
Host: foo.com
Content-Type: application/x-www-form-urlencoded
Content-Length: 13

say=Hi&to=Mom`,
    {
        method: 'POST',
        path: '/',
        headers: {
            host: 'foo.com',
            'content-type': 'application/x-www-form-urlencoded',
            'content-length': '13'
        },
        body: 'say=Hi&to=Mom',
        hostname: 'foo.com'
    }
);

requests.set(
    `POST /test.html HTTP/1.1 
Host: example.org 
Content-Type: multipart/form-data;boundary="boundary" 

--boundary 
Content-Disposition: form-data; name="field1" 

value1 
--boundary 
Content-Disposition: form-data; name="field2"; filename="example.txt" 

value2`,
    {
        method: 'POST',
        path: '/test.html',
        headers: {
            host: 'example.org',
            'content-type': 'multipart/form-data;boundary="boundary"',
        },
        hostname: 'example.org',
        body: `--boundary 
Content-Disposition: form-data; name="field1" 

value1 
--boundary 
Content-Disposition: form-data; name="field2"; filename="example.txt" 

value2`
    }
);

requests.set(
    `PUT /new.html HTTP/1.1
Host: example.com
Content-type: text/html
Content-length: 16

<p>New File</p>`,
    {
        method: 'PUT',
        path: '/new.html',
        headers: {
            host: 'example.com',
            'content-type': 'text/html',
            'content-length': '16'
        },
        body: '<p>New File</p>',
        hostname: 'example.com'
    }
);

// additionally, add a few requests with query strings
requests.set('GET /?key1=value&key2=value HTTP/1.1', {
    method: 'GET',
    path: '/',
    query: {
        key1: 'value',
        key2: 'value'
    },
    headers: {}
});

requests.set('GET /?key=value&key=value&key=value HTTP/1.1', {
    method: 'GET',
    path: '/',
    query: {key: ['value', 'value', 'value']},
    headers: {}
});

requests.set('GET https://api.example.com/path/to/resource?key=value HTTP/1.1', {
    method: 'GET',
    path: '/path/to/resource',
    headers: {},
    protocol: 'https:',
    hostname: 'api.example.com',
    query: {
        key: 'value'
    }
});
