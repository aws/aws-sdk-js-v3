import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";
import { DBParameterGroupNameMessage, ModifyDBParameterGroupMessage } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ModifyDBParameterGroupCommandInput = ModifyDBParameterGroupMessage;
export declare type ModifyDBParameterGroupCommandOutput = DBParameterGroupNameMessage & __MetadataBearer;
export declare class ModifyDBParameterGroupCommand extends $Command<ModifyDBParameterGroupCommandInput, ModifyDBParameterGroupCommandOutput, RDSClientResolvedConfig> {
    readonly input: ModifyDBParameterGroupCommandInput;
    constructor(input: ModifyDBParameterGroupCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RDSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ModifyDBParameterGroupCommandInput, ModifyDBParameterGroupCommandOutput>;
    private serialize;
    private deserialize;
}
