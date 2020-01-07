import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";
import { CreateClusterParameterGroupMessage, CreateClusterParameterGroupResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateClusterParameterGroupCommandInput = CreateClusterParameterGroupMessage;
export declare type CreateClusterParameterGroupCommandOutput = CreateClusterParameterGroupResult & __MetadataBearer;
export declare class CreateClusterParameterGroupCommand extends $Command<CreateClusterParameterGroupCommandInput, CreateClusterParameterGroupCommandOutput, RedshiftClientResolvedConfig> {
    readonly input: CreateClusterParameterGroupCommandInput;
    constructor(input: CreateClusterParameterGroupCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RedshiftClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateClusterParameterGroupCommandInput, CreateClusterParameterGroupCommandOutput>;
    private serialize;
    private deserialize;
}
