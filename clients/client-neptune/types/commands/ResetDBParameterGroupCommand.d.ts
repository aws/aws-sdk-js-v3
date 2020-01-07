import { NeptuneClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NeptuneClient";
import { DBParameterGroupNameMessage, ResetDBParameterGroupMessage } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ResetDBParameterGroupCommandInput = ResetDBParameterGroupMessage;
export declare type ResetDBParameterGroupCommandOutput = DBParameterGroupNameMessage & __MetadataBearer;
export declare class ResetDBParameterGroupCommand extends $Command<ResetDBParameterGroupCommandInput, ResetDBParameterGroupCommandOutput, NeptuneClientResolvedConfig> {
    readonly input: ResetDBParameterGroupCommandInput;
    constructor(input: ResetDBParameterGroupCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: NeptuneClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ResetDBParameterGroupCommandInput, ResetDBParameterGroupCommandOutput>;
    private serialize;
    private deserialize;
}
