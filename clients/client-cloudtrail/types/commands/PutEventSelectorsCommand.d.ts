import { CloudTrailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudTrailClient";
import { PutEventSelectorsRequest, PutEventSelectorsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type PutEventSelectorsCommandInput = PutEventSelectorsRequest;
export declare type PutEventSelectorsCommandOutput = PutEventSelectorsResponse & __MetadataBearer;
export declare class PutEventSelectorsCommand extends $Command<PutEventSelectorsCommandInput, PutEventSelectorsCommandOutput, CloudTrailClientResolvedConfig> {
    readonly input: PutEventSelectorsCommandInput;
    constructor(input: PutEventSelectorsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudTrailClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PutEventSelectorsCommandInput, PutEventSelectorsCommandOutput>;
    private serialize;
    private deserialize;
}
