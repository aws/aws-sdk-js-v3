import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { RequestSpotFleetRequest, RequestSpotFleetResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type RequestSpotFleetCommandInput = RequestSpotFleetRequest;
export declare type RequestSpotFleetCommandOutput = RequestSpotFleetResponse & __MetadataBearer;
export declare class RequestSpotFleetCommand extends $Command<RequestSpotFleetCommandInput, RequestSpotFleetCommandOutput, EC2ClientResolvedConfig> {
    readonly input: RequestSpotFleetCommandInput;
    constructor(input: RequestSpotFleetCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<RequestSpotFleetCommandInput, RequestSpotFleetCommandOutput>;
    private serialize;
    private deserialize;
}
