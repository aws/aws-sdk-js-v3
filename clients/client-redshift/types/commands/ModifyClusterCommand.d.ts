import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";
import { ModifyClusterMessage, ModifyClusterResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ModifyClusterCommandInput = ModifyClusterMessage;
export declare type ModifyClusterCommandOutput = ModifyClusterResult & __MetadataBearer;
export declare class ModifyClusterCommand extends $Command<ModifyClusterCommandInput, ModifyClusterCommandOutput, RedshiftClientResolvedConfig> {
    readonly input: ModifyClusterCommandInput;
    constructor(input: ModifyClusterCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RedshiftClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ModifyClusterCommandInput, ModifyClusterCommandOutput>;
    private serialize;
    private deserialize;
}
