import { GameLiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftClient";
import { DeleteScalingPolicyInput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteScalingPolicyCommandInput = DeleteScalingPolicyInput;
export declare type DeleteScalingPolicyCommandOutput = __MetadataBearer;
export declare class DeleteScalingPolicyCommand extends $Command<DeleteScalingPolicyCommandInput, DeleteScalingPolicyCommandOutput, GameLiftClientResolvedConfig> {
    readonly input: DeleteScalingPolicyCommandInput;
    constructor(input: DeleteScalingPolicyCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GameLiftClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteScalingPolicyCommandInput, DeleteScalingPolicyCommandOutput>;
    private serialize;
    private deserialize;
}
