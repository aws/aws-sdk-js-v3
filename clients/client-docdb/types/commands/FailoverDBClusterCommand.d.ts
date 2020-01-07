import { DocDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DocDBClient";
import { FailoverDBClusterMessage, FailoverDBClusterResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type FailoverDBClusterCommandInput = FailoverDBClusterMessage;
export declare type FailoverDBClusterCommandOutput = FailoverDBClusterResult & __MetadataBearer;
export declare class FailoverDBClusterCommand extends $Command<FailoverDBClusterCommandInput, FailoverDBClusterCommandOutput, DocDBClientResolvedConfig> {
    readonly input: FailoverDBClusterCommandInput;
    constructor(input: FailoverDBClusterCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DocDBClientResolvedConfig, options?: __HttpHandlerOptions): Handler<FailoverDBClusterCommandInput, FailoverDBClusterCommandOutput>;
    private serialize;
    private deserialize;
}
