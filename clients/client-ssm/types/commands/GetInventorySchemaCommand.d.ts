import { SSMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSMClient";
import { GetInventorySchemaRequest, GetInventorySchemaResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetInventorySchemaCommandInput = GetInventorySchemaRequest;
export declare type GetInventorySchemaCommandOutput = GetInventorySchemaResult & __MetadataBearer;
export declare class GetInventorySchemaCommand extends $Command<GetInventorySchemaCommandInput, GetInventorySchemaCommandOutput, SSMClientResolvedConfig> {
    readonly input: GetInventorySchemaCommandInput;
    constructor(input: GetInventorySchemaCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetInventorySchemaCommandInput, GetInventorySchemaCommandOutput>;
    private serialize;
    private deserialize;
}
