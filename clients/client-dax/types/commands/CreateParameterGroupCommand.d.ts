import { DAXClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DAXClient";
import { CreateParameterGroupRequest, CreateParameterGroupResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateParameterGroupCommandInput = CreateParameterGroupRequest;
export declare type CreateParameterGroupCommandOutput = CreateParameterGroupResponse & __MetadataBearer;
export declare class CreateParameterGroupCommand extends $Command<CreateParameterGroupCommandInput, CreateParameterGroupCommandOutput, DAXClientResolvedConfig> {
    readonly input: CreateParameterGroupCommandInput;
    constructor(input: CreateParameterGroupCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DAXClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateParameterGroupCommandInput, CreateParameterGroupCommandOutput>;
    private serialize;
    private deserialize;
}
