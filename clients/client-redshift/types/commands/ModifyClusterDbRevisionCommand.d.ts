import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";
import { ModifyClusterDbRevisionMessage, ModifyClusterDbRevisionResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ModifyClusterDbRevisionCommandInput = ModifyClusterDbRevisionMessage;
export declare type ModifyClusterDbRevisionCommandOutput = ModifyClusterDbRevisionResult & __MetadataBearer;
export declare class ModifyClusterDbRevisionCommand extends $Command<ModifyClusterDbRevisionCommandInput, ModifyClusterDbRevisionCommandOutput, RedshiftClientResolvedConfig> {
    readonly input: ModifyClusterDbRevisionCommandInput;
    constructor(input: ModifyClusterDbRevisionCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RedshiftClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ModifyClusterDbRevisionCommandInput, ModifyClusterDbRevisionCommandOutput>;
    private serialize;
    private deserialize;
}
