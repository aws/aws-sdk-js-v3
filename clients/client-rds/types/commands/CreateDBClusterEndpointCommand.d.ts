import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";
import { CreateDBClusterEndpointMessage, DBClusterEndpoint } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateDBClusterEndpointCommandInput = CreateDBClusterEndpointMessage;
export declare type CreateDBClusterEndpointCommandOutput = DBClusterEndpoint & __MetadataBearer;
export declare class CreateDBClusterEndpointCommand extends $Command<CreateDBClusterEndpointCommandInput, CreateDBClusterEndpointCommandOutput, RDSClientResolvedConfig> {
    readonly input: CreateDBClusterEndpointCommandInput;
    constructor(input: CreateDBClusterEndpointCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RDSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateDBClusterEndpointCommandInput, CreateDBClusterEndpointCommandOutput>;
    private serialize;
    private deserialize;
}
