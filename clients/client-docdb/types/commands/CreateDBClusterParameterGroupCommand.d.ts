import { DocDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DocDBClient";
import { CreateDBClusterParameterGroupMessage, CreateDBClusterParameterGroupResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateDBClusterParameterGroupCommandInput = CreateDBClusterParameterGroupMessage;
export declare type CreateDBClusterParameterGroupCommandOutput = CreateDBClusterParameterGroupResult & __MetadataBearer;
export declare class CreateDBClusterParameterGroupCommand extends $Command<CreateDBClusterParameterGroupCommandInput, CreateDBClusterParameterGroupCommandOutput, DocDBClientResolvedConfig> {
    readonly input: CreateDBClusterParameterGroupCommandInput;
    constructor(input: CreateDBClusterParameterGroupCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DocDBClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateDBClusterParameterGroupCommandInput, CreateDBClusterParameterGroupCommandOutput>;
    private serialize;
    private deserialize;
}
