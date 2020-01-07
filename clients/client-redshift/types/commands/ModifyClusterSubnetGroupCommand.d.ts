import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";
import { ModifyClusterSubnetGroupMessage, ModifyClusterSubnetGroupResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ModifyClusterSubnetGroupCommandInput = ModifyClusterSubnetGroupMessage;
export declare type ModifyClusterSubnetGroupCommandOutput = ModifyClusterSubnetGroupResult & __MetadataBearer;
export declare class ModifyClusterSubnetGroupCommand extends $Command<ModifyClusterSubnetGroupCommandInput, ModifyClusterSubnetGroupCommandOutput, RedshiftClientResolvedConfig> {
    readonly input: ModifyClusterSubnetGroupCommandInput;
    constructor(input: ModifyClusterSubnetGroupCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RedshiftClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ModifyClusterSubnetGroupCommandInput, ModifyClusterSubnetGroupCommandOutput>;
    private serialize;
    private deserialize;
}
