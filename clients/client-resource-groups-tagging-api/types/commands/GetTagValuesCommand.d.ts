import { ResourceGroupsTaggingAPIClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ResourceGroupsTaggingAPIClient";
import { GetTagValuesInput, GetTagValuesOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetTagValuesCommandInput = GetTagValuesInput;
export declare type GetTagValuesCommandOutput = GetTagValuesOutput & __MetadataBearer;
export declare class GetTagValuesCommand extends $Command<GetTagValuesCommandInput, GetTagValuesCommandOutput, ResourceGroupsTaggingAPIClientResolvedConfig> {
    readonly input: GetTagValuesCommandInput;
    constructor(input: GetTagValuesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ResourceGroupsTaggingAPIClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetTagValuesCommandInput, GetTagValuesCommandOutput>;
    private serialize;
    private deserialize;
}
