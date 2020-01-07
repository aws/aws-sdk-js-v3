import { CloudTrailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudTrailClient";
import { GetEventSelectorsRequest, GetEventSelectorsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetEventSelectorsCommandInput = GetEventSelectorsRequest;
export declare type GetEventSelectorsCommandOutput = GetEventSelectorsResponse & __MetadataBearer;
export declare class GetEventSelectorsCommand extends $Command<GetEventSelectorsCommandInput, GetEventSelectorsCommandOutput, CloudTrailClientResolvedConfig> {
    readonly input: GetEventSelectorsCommandInput;
    constructor(input: GetEventSelectorsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudTrailClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetEventSelectorsCommandInput, GetEventSelectorsCommandOutput>;
    private serialize;
    private deserialize;
}
