import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { GetCloudFormationStackRecordsRequest, GetCloudFormationStackRecordsResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetCloudFormationStackRecordsCommandInput = GetCloudFormationStackRecordsRequest;
export declare type GetCloudFormationStackRecordsCommandOutput = GetCloudFormationStackRecordsResult & __MetadataBearer;
export declare class GetCloudFormationStackRecordsCommand extends $Command<GetCloudFormationStackRecordsCommandInput, GetCloudFormationStackRecordsCommandOutput, LightsailClientResolvedConfig> {
    readonly input: GetCloudFormationStackRecordsCommandInput;
    constructor(input: GetCloudFormationStackRecordsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LightsailClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetCloudFormationStackRecordsCommandInput, GetCloudFormationStackRecordsCommandOutput>;
    private serialize;
    private deserialize;
}
