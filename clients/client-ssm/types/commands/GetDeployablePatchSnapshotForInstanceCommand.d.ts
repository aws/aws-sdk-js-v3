import { SSMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSMClient";
import { GetDeployablePatchSnapshotForInstanceRequest, GetDeployablePatchSnapshotForInstanceResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetDeployablePatchSnapshotForInstanceCommandInput = GetDeployablePatchSnapshotForInstanceRequest;
export declare type GetDeployablePatchSnapshotForInstanceCommandOutput = GetDeployablePatchSnapshotForInstanceResult & __MetadataBearer;
export declare class GetDeployablePatchSnapshotForInstanceCommand extends $Command<GetDeployablePatchSnapshotForInstanceCommandInput, GetDeployablePatchSnapshotForInstanceCommandOutput, SSMClientResolvedConfig> {
    readonly input: GetDeployablePatchSnapshotForInstanceCommandInput;
    constructor(input: GetDeployablePatchSnapshotForInstanceCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetDeployablePatchSnapshotForInstanceCommandInput, GetDeployablePatchSnapshotForInstanceCommandOutput>;
    private serialize;
    private deserialize;
}
