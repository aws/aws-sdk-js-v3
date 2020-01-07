import { DocDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DocDBClient";
import { ModifyDBClusterMessage, ModifyDBClusterResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ModifyDBClusterCommandInput = ModifyDBClusterMessage;
export declare type ModifyDBClusterCommandOutput = ModifyDBClusterResult & __MetadataBearer;
export declare class ModifyDBClusterCommand extends $Command<ModifyDBClusterCommandInput, ModifyDBClusterCommandOutput, DocDBClientResolvedConfig> {
    readonly input: ModifyDBClusterCommandInput;
    constructor(input: ModifyDBClusterCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DocDBClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ModifyDBClusterCommandInput, ModifyDBClusterCommandOutput>;
    private serialize;
    private deserialize;
}
