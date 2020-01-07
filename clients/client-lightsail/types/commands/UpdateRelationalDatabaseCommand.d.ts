import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { UpdateRelationalDatabaseRequest, UpdateRelationalDatabaseResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateRelationalDatabaseCommandInput = UpdateRelationalDatabaseRequest;
export declare type UpdateRelationalDatabaseCommandOutput = UpdateRelationalDatabaseResult & __MetadataBearer;
export declare class UpdateRelationalDatabaseCommand extends $Command<UpdateRelationalDatabaseCommandInput, UpdateRelationalDatabaseCommandOutput, LightsailClientResolvedConfig> {
    readonly input: UpdateRelationalDatabaseCommandInput;
    constructor(input: UpdateRelationalDatabaseCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LightsailClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateRelationalDatabaseCommandInput, UpdateRelationalDatabaseCommandOutput>;
    private serialize;
    private deserialize;
}
