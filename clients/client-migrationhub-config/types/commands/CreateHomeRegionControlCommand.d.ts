import { MigrationHubConfigClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MigrationHubConfigClient";
import { CreateHomeRegionControlRequest, CreateHomeRegionControlResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateHomeRegionControlCommandInput = CreateHomeRegionControlRequest;
export declare type CreateHomeRegionControlCommandOutput = CreateHomeRegionControlResult & __MetadataBearer;
export declare class CreateHomeRegionControlCommand extends $Command<CreateHomeRegionControlCommandInput, CreateHomeRegionControlCommandOutput, MigrationHubConfigClientResolvedConfig> {
    readonly input: CreateHomeRegionControlCommandInput;
    constructor(input: CreateHomeRegionControlCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MigrationHubConfigClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateHomeRegionControlCommandInput, CreateHomeRegionControlCommandOutput>;
    private serialize;
    private deserialize;
}
