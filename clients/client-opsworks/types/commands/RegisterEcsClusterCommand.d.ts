import { OpsWorksClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpsWorksClient";
import { RegisterEcsClusterRequest, RegisterEcsClusterResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type RegisterEcsClusterCommandInput = RegisterEcsClusterRequest;
export declare type RegisterEcsClusterCommandOutput = RegisterEcsClusterResult & __MetadataBearer;
export declare class RegisterEcsClusterCommand extends $Command<RegisterEcsClusterCommandInput, RegisterEcsClusterCommandOutput, OpsWorksClientResolvedConfig> {
    readonly input: RegisterEcsClusterCommandInput;
    constructor(input: RegisterEcsClusterCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: OpsWorksClientResolvedConfig, options?: __HttpHandlerOptions): Handler<RegisterEcsClusterCommandInput, RegisterEcsClusterCommandOutput>;
    private serialize;
    private deserialize;
}
