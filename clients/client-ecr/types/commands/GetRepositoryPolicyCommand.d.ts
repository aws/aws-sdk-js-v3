import { ECRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECRClient";
import { GetRepositoryPolicyRequest, GetRepositoryPolicyResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetRepositoryPolicyCommandInput = GetRepositoryPolicyRequest;
export declare type GetRepositoryPolicyCommandOutput = GetRepositoryPolicyResponse & __MetadataBearer;
export declare class GetRepositoryPolicyCommand extends $Command<GetRepositoryPolicyCommandInput, GetRepositoryPolicyCommandOutput, ECRClientResolvedConfig> {
    readonly input: GetRepositoryPolicyCommandInput;
    constructor(input: GetRepositoryPolicyCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ECRClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetRepositoryPolicyCommandInput, GetRepositoryPolicyCommandOutput>;
    private serialize;
    private deserialize;
}
