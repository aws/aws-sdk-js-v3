import { MigrationHubConfigClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MigrationHubConfigClient";
import { GetHomeRegionRequest, GetHomeRegionResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetHomeRegionCommandInput = GetHomeRegionRequest;
export declare type GetHomeRegionCommandOutput = GetHomeRegionResult & __MetadataBearer;
export declare class GetHomeRegionCommand extends $Command<GetHomeRegionCommandInput, GetHomeRegionCommandOutput, MigrationHubConfigClientResolvedConfig> {
    readonly input: GetHomeRegionCommandInput;
    constructor(input: GetHomeRegionCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MigrationHubConfigClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetHomeRegionCommandInput, GetHomeRegionCommandOutput>;
    private serialize;
    private deserialize;
}
