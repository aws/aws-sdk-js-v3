import { ServiceInputTypes, ServiceOutputTypes, kendraClientResolvedConfig } from "../kendraClient";
import { CreateDataSourceRequest, CreateDataSourceResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateDataSourceCommandInput = CreateDataSourceRequest;
export declare type CreateDataSourceCommandOutput = CreateDataSourceResponse & __MetadataBearer;
export declare class CreateDataSourceCommand extends $Command<CreateDataSourceCommandInput, CreateDataSourceCommandOutput, kendraClientResolvedConfig> {
    readonly input: CreateDataSourceCommandInput;
    constructor(input: CreateDataSourceCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: kendraClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateDataSourceCommandInput, CreateDataSourceCommandOutput>;
    private serialize;
    private deserialize;
}
