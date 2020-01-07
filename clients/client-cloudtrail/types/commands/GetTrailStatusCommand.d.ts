import { CloudTrailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudTrailClient";
import { GetTrailStatusRequest, GetTrailStatusResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetTrailStatusCommandInput = GetTrailStatusRequest;
export declare type GetTrailStatusCommandOutput = GetTrailStatusResponse & __MetadataBearer;
export declare class GetTrailStatusCommand extends $Command<GetTrailStatusCommandInput, GetTrailStatusCommandOutput, CloudTrailClientResolvedConfig> {
    readonly input: GetTrailStatusCommandInput;
    constructor(input: GetTrailStatusCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudTrailClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetTrailStatusCommandInput, GetTrailStatusCommandOutput>;
    private serialize;
    private deserialize;
}
