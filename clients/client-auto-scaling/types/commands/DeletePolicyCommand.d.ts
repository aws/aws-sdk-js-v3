import { AutoScalingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AutoScalingClient";
import { DeletePolicyType } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeletePolicyCommandInput = DeletePolicyType;
export declare type DeletePolicyCommandOutput = __MetadataBearer;
export declare class DeletePolicyCommand extends $Command<DeletePolicyCommandInput, DeletePolicyCommandOutput, AutoScalingClientResolvedConfig> {
    readonly input: DeletePolicyCommandInput;
    constructor(input: DeletePolicyCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: AutoScalingClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeletePolicyCommandInput, DeletePolicyCommandOutput>;
    private serialize;
    private deserialize;
}
