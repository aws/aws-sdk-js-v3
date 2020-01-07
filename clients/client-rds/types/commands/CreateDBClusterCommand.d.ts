import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";
import { CreateDBClusterMessage, CreateDBClusterResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateDBClusterCommandInput = CreateDBClusterMessage;
export declare type CreateDBClusterCommandOutput = CreateDBClusterResult & __MetadataBearer;
export declare class CreateDBClusterCommand extends $Command<CreateDBClusterCommandInput, CreateDBClusterCommandOutput, RDSClientResolvedConfig> {
    readonly input: CreateDBClusterCommandInput;
    constructor(input: CreateDBClusterCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RDSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateDBClusterCommandInput, CreateDBClusterCommandOutput>;
    private serialize;
    private deserialize;
}
