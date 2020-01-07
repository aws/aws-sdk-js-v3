import { DocDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DocDBClient";
import { DBClusterParameterGroupNameMessage, ModifyDBClusterParameterGroupMessage } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ModifyDBClusterParameterGroupCommandInput = ModifyDBClusterParameterGroupMessage;
export declare type ModifyDBClusterParameterGroupCommandOutput = DBClusterParameterGroupNameMessage & __MetadataBearer;
export declare class ModifyDBClusterParameterGroupCommand extends $Command<ModifyDBClusterParameterGroupCommandInput, ModifyDBClusterParameterGroupCommandOutput, DocDBClientResolvedConfig> {
    readonly input: ModifyDBClusterParameterGroupCommandInput;
    constructor(input: ModifyDBClusterParameterGroupCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DocDBClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ModifyDBClusterParameterGroupCommandInput, ModifyDBClusterParameterGroupCommandOutput>;
    private serialize;
    private deserialize;
}
