import { NeptuneClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NeptuneClient";
import { CreateDBParameterGroupMessage, CreateDBParameterGroupResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateDBParameterGroupCommandInput = CreateDBParameterGroupMessage;
export declare type CreateDBParameterGroupCommandOutput = CreateDBParameterGroupResult & __MetadataBearer;
export declare class CreateDBParameterGroupCommand extends $Command<CreateDBParameterGroupCommandInput, CreateDBParameterGroupCommandOutput, NeptuneClientResolvedConfig> {
    readonly input: CreateDBParameterGroupCommandInput;
    constructor(input: CreateDBParameterGroupCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: NeptuneClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateDBParameterGroupCommandInput, CreateDBParameterGroupCommandOutput>;
    private serialize;
    private deserialize;
}
