import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";
import { RebootClusterMessage, RebootClusterResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type RebootClusterCommandInput = RebootClusterMessage;
export declare type RebootClusterCommandOutput = RebootClusterResult & __MetadataBearer;
export declare class RebootClusterCommand extends $Command<RebootClusterCommandInput, RebootClusterCommandOutput, RedshiftClientResolvedConfig> {
    readonly input: RebootClusterCommandInput;
    constructor(input: RebootClusterCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RedshiftClientResolvedConfig, options?: __HttpHandlerOptions): Handler<RebootClusterCommandInput, RebootClusterCommandOutput>;
    private serialize;
    private deserialize;
}
