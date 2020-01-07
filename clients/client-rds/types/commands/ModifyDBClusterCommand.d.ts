import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";
import { ModifyDBClusterMessage, ModifyDBClusterResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ModifyDBClusterCommandInput = ModifyDBClusterMessage;
export declare type ModifyDBClusterCommandOutput = ModifyDBClusterResult & __MetadataBearer;
export declare class ModifyDBClusterCommand extends $Command<ModifyDBClusterCommandInput, ModifyDBClusterCommandOutput, RDSClientResolvedConfig> {
    readonly input: ModifyDBClusterCommandInput;
    constructor(input: ModifyDBClusterCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RDSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ModifyDBClusterCommandInput, ModifyDBClusterCommandOutput>;
    private serialize;
    private deserialize;
}
