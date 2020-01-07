import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";
import { ClusterCredentials, GetClusterCredentialsMessage } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetClusterCredentialsCommandInput = GetClusterCredentialsMessage;
export declare type GetClusterCredentialsCommandOutput = ClusterCredentials & __MetadataBearer;
export declare class GetClusterCredentialsCommand extends $Command<GetClusterCredentialsCommandInput, GetClusterCredentialsCommandOutput, RedshiftClientResolvedConfig> {
    readonly input: GetClusterCredentialsCommandInput;
    constructor(input: GetClusterCredentialsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RedshiftClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetClusterCredentialsCommandInput, GetClusterCredentialsCommandOutput>;
    private serialize;
    private deserialize;
}
