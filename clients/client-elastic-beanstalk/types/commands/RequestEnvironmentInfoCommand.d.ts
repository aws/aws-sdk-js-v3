import { ElasticBeanstalkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElasticBeanstalkClient";
import { RequestEnvironmentInfoMessage } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type RequestEnvironmentInfoCommandInput = RequestEnvironmentInfoMessage;
export declare type RequestEnvironmentInfoCommandOutput = __MetadataBearer;
export declare class RequestEnvironmentInfoCommand extends $Command<RequestEnvironmentInfoCommandInput, RequestEnvironmentInfoCommandOutput, ElasticBeanstalkClientResolvedConfig> {
    readonly input: RequestEnvironmentInfoCommandInput;
    constructor(input: RequestEnvironmentInfoCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ElasticBeanstalkClientResolvedConfig, options?: __HttpHandlerOptions): Handler<RequestEnvironmentInfoCommandInput, RequestEnvironmentInfoCommandOutput>;
    private serialize;
    private deserialize;
}
