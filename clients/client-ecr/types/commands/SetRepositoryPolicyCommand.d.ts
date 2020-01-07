import { ECRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECRClient";
import { SetRepositoryPolicyRequest, SetRepositoryPolicyResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type SetRepositoryPolicyCommandInput = SetRepositoryPolicyRequest;
export declare type SetRepositoryPolicyCommandOutput = SetRepositoryPolicyResponse & __MetadataBearer;
export declare class SetRepositoryPolicyCommand extends $Command<SetRepositoryPolicyCommandInput, SetRepositoryPolicyCommandOutput, ECRClientResolvedConfig> {
    readonly input: SetRepositoryPolicyCommandInput;
    constructor(input: SetRepositoryPolicyCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ECRClientResolvedConfig, options?: __HttpHandlerOptions): Handler<SetRepositoryPolicyCommandInput, SetRepositoryPolicyCommandOutput>;
    private serialize;
    private deserialize;
}
