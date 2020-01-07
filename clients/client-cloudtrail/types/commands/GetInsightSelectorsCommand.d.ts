import { CloudTrailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudTrailClient";
import { GetInsightSelectorsRequest, GetInsightSelectorsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetInsightSelectorsCommandInput = GetInsightSelectorsRequest;
export declare type GetInsightSelectorsCommandOutput = GetInsightSelectorsResponse & __MetadataBearer;
export declare class GetInsightSelectorsCommand extends $Command<GetInsightSelectorsCommandInput, GetInsightSelectorsCommandOutput, CloudTrailClientResolvedConfig> {
    readonly input: GetInsightSelectorsCommandInput;
    constructor(input: GetInsightSelectorsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudTrailClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetInsightSelectorsCommandInput, GetInsightSelectorsCommandOutput>;
    private serialize;
    private deserialize;
}
