import { ServiceInputTypes, ServiceOutputTypes, SnowballClientResolvedConfig } from "../SnowballClient";
import { CancelClusterRequest, CancelClusterResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CancelClusterCommandInput = CancelClusterRequest;
export declare type CancelClusterCommandOutput = CancelClusterResult & __MetadataBearer;
export declare class CancelClusterCommand extends $Command<CancelClusterCommandInput, CancelClusterCommandOutput, SnowballClientResolvedConfig> {
    readonly input: CancelClusterCommandInput;
    constructor(input: CancelClusterCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SnowballClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CancelClusterCommandInput, CancelClusterCommandOutput>;
    private serialize;
    private deserialize;
}
