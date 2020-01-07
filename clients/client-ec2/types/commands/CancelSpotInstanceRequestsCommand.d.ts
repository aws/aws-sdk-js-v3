import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { CancelSpotInstanceRequestsRequest, CancelSpotInstanceRequestsResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CancelSpotInstanceRequestsCommandInput = CancelSpotInstanceRequestsRequest;
export declare type CancelSpotInstanceRequestsCommandOutput = CancelSpotInstanceRequestsResult & __MetadataBearer;
export declare class CancelSpotInstanceRequestsCommand extends $Command<CancelSpotInstanceRequestsCommandInput, CancelSpotInstanceRequestsCommandOutput, EC2ClientResolvedConfig> {
    readonly input: CancelSpotInstanceRequestsCommandInput;
    constructor(input: CancelSpotInstanceRequestsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CancelSpotInstanceRequestsCommandInput, CancelSpotInstanceRequestsCommandOutput>;
    private serialize;
    private deserialize;
}
