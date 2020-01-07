import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { CancelSpotFleetRequestsRequest, CancelSpotFleetRequestsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CancelSpotFleetRequestsCommandInput = CancelSpotFleetRequestsRequest;
export declare type CancelSpotFleetRequestsCommandOutput = CancelSpotFleetRequestsResponse & __MetadataBearer;
export declare class CancelSpotFleetRequestsCommand extends $Command<CancelSpotFleetRequestsCommandInput, CancelSpotFleetRequestsCommandOutput, EC2ClientResolvedConfig> {
    readonly input: CancelSpotFleetRequestsCommandInput;
    constructor(input: CancelSpotFleetRequestsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CancelSpotFleetRequestsCommandInput, CancelSpotFleetRequestsCommandOutput>;
    private serialize;
    private deserialize;
}
