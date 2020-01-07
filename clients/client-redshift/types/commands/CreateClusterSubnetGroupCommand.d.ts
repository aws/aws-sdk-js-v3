import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";
import { CreateClusterSubnetGroupMessage, CreateClusterSubnetGroupResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateClusterSubnetGroupCommandInput = CreateClusterSubnetGroupMessage;
export declare type CreateClusterSubnetGroupCommandOutput = CreateClusterSubnetGroupResult & __MetadataBearer;
export declare class CreateClusterSubnetGroupCommand extends $Command<CreateClusterSubnetGroupCommandInput, CreateClusterSubnetGroupCommandOutput, RedshiftClientResolvedConfig> {
    readonly input: CreateClusterSubnetGroupCommandInput;
    constructor(input: CreateClusterSubnetGroupCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RedshiftClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateClusterSubnetGroupCommandInput, CreateClusterSubnetGroupCommandOutput>;
    private serialize;
    private deserialize;
}
