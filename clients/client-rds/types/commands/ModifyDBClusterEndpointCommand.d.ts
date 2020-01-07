import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";
import { DBClusterEndpoint, ModifyDBClusterEndpointMessage } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ModifyDBClusterEndpointCommandInput = ModifyDBClusterEndpointMessage;
export declare type ModifyDBClusterEndpointCommandOutput = DBClusterEndpoint & __MetadataBearer;
export declare class ModifyDBClusterEndpointCommand extends $Command<ModifyDBClusterEndpointCommandInput, ModifyDBClusterEndpointCommandOutput, RDSClientResolvedConfig> {
    readonly input: ModifyDBClusterEndpointCommandInput;
    constructor(input: ModifyDBClusterEndpointCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RDSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ModifyDBClusterEndpointCommandInput, ModifyDBClusterEndpointCommandOutput>;
    private serialize;
    private deserialize;
}
