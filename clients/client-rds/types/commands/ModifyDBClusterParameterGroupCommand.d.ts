import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";
import { DBClusterParameterGroupNameMessage, ModifyDBClusterParameterGroupMessage } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ModifyDBClusterParameterGroupCommandInput = ModifyDBClusterParameterGroupMessage;
export declare type ModifyDBClusterParameterGroupCommandOutput = DBClusterParameterGroupNameMessage & __MetadataBearer;
export declare class ModifyDBClusterParameterGroupCommand extends $Command<ModifyDBClusterParameterGroupCommandInput, ModifyDBClusterParameterGroupCommandOutput, RDSClientResolvedConfig> {
    readonly input: ModifyDBClusterParameterGroupCommandInput;
    constructor(input: ModifyDBClusterParameterGroupCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RDSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ModifyDBClusterParameterGroupCommandInput, ModifyDBClusterParameterGroupCommandOutput>;
    private serialize;
    private deserialize;
}
