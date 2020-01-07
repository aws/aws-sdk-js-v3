import { CloudTrailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudTrailClient";
import { PutInsightSelectorsRequest, PutInsightSelectorsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type PutInsightSelectorsCommandInput = PutInsightSelectorsRequest;
export declare type PutInsightSelectorsCommandOutput = PutInsightSelectorsResponse & __MetadataBearer;
export declare class PutInsightSelectorsCommand extends $Command<PutInsightSelectorsCommandInput, PutInsightSelectorsCommandOutput, CloudTrailClientResolvedConfig> {
    readonly input: PutInsightSelectorsCommandInput;
    constructor(input: PutInsightSelectorsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudTrailClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PutInsightSelectorsCommandInput, PutInsightSelectorsCommandOutput>;
    private serialize;
    private deserialize;
}
