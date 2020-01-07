import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";
import { StartDBClusterMessage, StartDBClusterResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type StartDBClusterCommandInput = StartDBClusterMessage;
export declare type StartDBClusterCommandOutput = StartDBClusterResult & __MetadataBearer;
export declare class StartDBClusterCommand extends $Command<StartDBClusterCommandInput, StartDBClusterCommandOutput, RDSClientResolvedConfig> {
    readonly input: StartDBClusterCommandInput;
    constructor(input: StartDBClusterCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RDSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StartDBClusterCommandInput, StartDBClusterCommandOutput>;
    private serialize;
    private deserialize;
}
