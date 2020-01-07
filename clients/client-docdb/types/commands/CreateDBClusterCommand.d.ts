import { DocDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DocDBClient";
import { CreateDBClusterMessage, CreateDBClusterResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateDBClusterCommandInput = CreateDBClusterMessage;
export declare type CreateDBClusterCommandOutput = CreateDBClusterResult & __MetadataBearer;
export declare class CreateDBClusterCommand extends $Command<CreateDBClusterCommandInput, CreateDBClusterCommandOutput, DocDBClientResolvedConfig> {
    readonly input: CreateDBClusterCommandInput;
    constructor(input: CreateDBClusterCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DocDBClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateDBClusterCommandInput, CreateDBClusterCommandOutput>;
    private serialize;
    private deserialize;
}
