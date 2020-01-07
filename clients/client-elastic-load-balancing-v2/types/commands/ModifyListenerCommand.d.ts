import { ElasticLoadBalancingv2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElasticLoadBalancingv2Client";
import { ModifyListenerInput, ModifyListenerOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ModifyListenerCommandInput = ModifyListenerInput;
export declare type ModifyListenerCommandOutput = ModifyListenerOutput & __MetadataBearer;
export declare class ModifyListenerCommand extends $Command<ModifyListenerCommandInput, ModifyListenerCommandOutput, ElasticLoadBalancingv2ClientResolvedConfig> {
    readonly input: ModifyListenerCommandInput;
    constructor(input: ModifyListenerCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ElasticLoadBalancingv2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ModifyListenerCommandInput, ModifyListenerCommandOutput>;
    private serialize;
    private deserialize;
}
