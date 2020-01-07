import { DynamoDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DynamoDBClient";
import { UpdateGlobalTableSettingsInput, UpdateGlobalTableSettingsOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateGlobalTableSettingsCommandInput = UpdateGlobalTableSettingsInput;
export declare type UpdateGlobalTableSettingsCommandOutput = UpdateGlobalTableSettingsOutput & __MetadataBearer;
export declare class UpdateGlobalTableSettingsCommand extends $Command<UpdateGlobalTableSettingsCommandInput, UpdateGlobalTableSettingsCommandOutput, DynamoDBClientResolvedConfig> {
    readonly input: UpdateGlobalTableSettingsCommandInput;
    constructor(input: UpdateGlobalTableSettingsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DynamoDBClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateGlobalTableSettingsCommandInput, UpdateGlobalTableSettingsCommandOutput>;
    private serialize;
    private deserialize;
}
