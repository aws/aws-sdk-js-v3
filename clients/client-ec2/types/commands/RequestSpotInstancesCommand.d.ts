import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { RequestSpotInstancesRequest, RequestSpotInstancesResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type RequestSpotInstancesCommandInput = RequestSpotInstancesRequest;
export declare type RequestSpotInstancesCommandOutput = RequestSpotInstancesResult & __MetadataBearer;
export declare class RequestSpotInstancesCommand extends $Command<RequestSpotInstancesCommandInput, RequestSpotInstancesCommandOutput, EC2ClientResolvedConfig> {
    readonly input: RequestSpotInstancesCommandInput;
    constructor(input: RequestSpotInstancesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<RequestSpotInstancesCommandInput, RequestSpotInstancesCommandOutput>;
    private serialize;
    private deserialize;
}
