import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";
import { ModifyGlobalClusterMessage, ModifyGlobalClusterResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ModifyGlobalClusterCommandInput = ModifyGlobalClusterMessage;
export declare type ModifyGlobalClusterCommandOutput = ModifyGlobalClusterResult & __MetadataBearer;
export declare class ModifyGlobalClusterCommand extends $Command<ModifyGlobalClusterCommandInput, ModifyGlobalClusterCommandOutput, RDSClientResolvedConfig> {
    readonly input: ModifyGlobalClusterCommandInput;
    constructor(input: ModifyGlobalClusterCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RDSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ModifyGlobalClusterCommandInput, ModifyGlobalClusterCommandOutput>;
    private serialize;
    private deserialize;
}
